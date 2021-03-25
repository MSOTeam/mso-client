import "@yaireo/tagify/dist/tagify.css";

import * as actions from "./actions";

import {
  Box,
  BoxOverlay,
  Categoryname,
  Delete,
  FilteWrapper,
  FilterBox,
  Grid,
  Header,
  Image,
  Tags,
  TagsWrapper,
} from "./styles";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import Card from "../../components/Card/Card";
import { PropTypes } from "prop-types";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { debounce } from "lodash";
import io from "socket.io-client";
import { isNull } from "lodash";
import { keyframes } from "styled-components";

const Articles = ({ dispatch, ...props }) => {
  const sidebarStatus = useSelector((state) => state.sidebar);
  const [articles, setArticles] = useState([]);
  const [placeHolder, setPlaceholder] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]); 

  const { match, cats } = props;

  const fetch = (match) => {
    if (match?.params === undefined) {
      return;
    }
    const url = `article/?tag=${match.params.tag}`;
    const token = localStorage.getItem("token");
    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setArticles({ articles: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const search = debounce((value) => {
    let text = "";
    if (value.length > 1) {
      text = value;
    }
    const url = `article/?tag=${match.params.tag}&text=${text}`;
    const token = localStorage.getItem("token");

    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setArticles({ articles: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 300);

  useEffect(() => {
    fetch(match);
    const options = {
      rememberUpgrade: true,
      transports: ["websocket"],
      secure: false,
      rejectUnauthorized: false,
    };
    const socket = io("http://localhost:5000", options);
    socket.on("article", (data) => {
      fetch(match);
    });
  }, [match, cats]);
  return (
    <>
      <Grid sidebarStatus={sidebarStatus.isOpen} category>
        {match.params.tag ? (
          <Categoryname sidebarStatus={sidebarStatus.isOpen}>
            {match.params.tag}
          </Categoryname>
        ) : (
          <Categoryname sidebarStatus={sidebarStatus.isOpen}>
            Latest tags
          </Categoryname>
        )}
        <FilteWrapper sidebarStatus={sidebarStatus.isOpen}>
          <FilterBox
            placeholder="Search"
            onChange={(e) => search(e.target.value)}
          />
        </FilteWrapper>
      </Grid>
      <>
        {articles?.articles?.length > 0 ? (
          <Grid sidebarStatus={sidebarStatus.isOpen}>
            {match.params.tag === "archive" &&
              articles?.articles?.map(
                (article, index) =>
                  !isNull(article.tags) &&
                  article.tags[0] === "archive" && (
                    <>
                      <Box id={index} key={index}>
                        <Card data={article} match={match} />
                      </Box>
                    </>
                  )
              )}
            {match.params.tag === "unsorted" &&
              articles?.articles?.map(
                (article, index) =>
                  !isNull(article.tags) &&
                  article.tags[0] === "unsorted" && (
                    <>
                      <Box id={index} key={index}>
                        <Card data={article} match={match} />
                      </Box>
                    </>
                  )
              )}
            {match.params.tag !== "archive" &&
              match.params.tag !== "unsorted" &&
              articles?.articles?.map(
                (article, index) =>
                  !isNull(article.tags) &&
                  article.tags[0] !== "archive" &&
                  article.tags[0] !== "unsorted" && (
                    <>
                      <Box id={index} key={index}>
                        <Card data={article} match={match} />
                      </Box>
                    </>
                  )
              )}
          </Grid>
        ) : (
          <Grid sidebarStatus={sidebarStatus.isOpen}>
            {articles?.articles?.length === 0
              ? <div>Nothing here :(</div>
              : placeHolder.map((article) => (
                  <Box key={article._id}>
                    <BoxOverlay>
                      <Image>
                        <Skeleton height={200} />
                      </Image>
                    </BoxOverlay>
                    <Header>
                      <Skeleton count={2} />
                    </Header>
                    <TagsWrapper>
                      <Tags>
                        <Skeleton style={{ float: "left" }} width={50} />
                      </Tags>
                    </TagsWrapper>
                  </Box>
                ))}
          </Grid>
        )}
        {match.params.tag === "archive" && (
          <div style={{ position: "relative" }}>
            <Delete>Permanently delete all items</Delete>
          </div>
        )}
      </>
    </>
  );
};

Articles.defaultProps = {
  match: {
    params: {
      tag: "",
    },
  },
};

Articles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
    cats: state.articles,
  };
}

export default connect(mapStateToProps)(Articles);
