import "@yaireo/tagify/dist/tagify.css";

import * as actions from "../../modules/articles/actions";

import { AddTo, Close, FavSmall, FavSmallChecked } from "../../assets/icon";
import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import Taglist from "../Taglist/Taglist";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { connect } from "react-redux";
import { push } from "react-router-redux";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Tag = styled(Tags)`
  background: #fff;
  margin: 15px 0;
  > span {
    padding-left: 0px;
  }
`;

const ArticleBoxOverlay = styled.div`
  overflow: hidden;
  height: 200px;
  margin-bottom: 10px;
  background: #fafafa;
  position: relative;
`;

const ArticleImage = styled.div`
  ${(props) =>
    props.image &&
    css`
      animation: ${fadeIn} 0.2s ease-in-out;
      background: url(${props.image}) no-repeat center center;
    `}
  height: 100%;
  width: 100%;
  background-size: cover;
  transition: transform 0.1s linear;
`;

const ArticleHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 0 10px;
`;

const ArticleTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 10px 10px;
`;

const ArticleTags = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  line-height: 24px;
  color: #5649cf;
`;

const EditWrapper = styled.div`
  background-image: linear-gradient(#6955e2, #28a6c8);
  height: 100%;
  z-index: 1;
  ${(props) =>
    props.bg &&
    css`
      background: #6563ff;
    `}
`;

const EditBlobTop = styled.div`
  width: 1500px;
  height: 1500px;
  background: rgb(91, 95, 203);
  opacity: 0.6;
  border-radius: 100%;
  position: absolute;
  top: -20%;
  right: -20%;
`;

const EditBlobBottom = styled.div`
  width: 1000px;
  height: 1000px;
  border-radius: 100%;
  background: #4384d3;
  position: absolute;
  bottom: -20%;
  left: -20%;
  opacity: 0.3;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  margin: auto;
  color: white;
  letter-spacing: 1px;
`;

const ContentMini = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  width: 100% > h1 {
    font-weight: 100;
    margin-bottom: 20px;
  }
`;

const ExitEdit = styled.div`
  position: absolute;
  top: 10px;
  right: 11px;
  z-index: 1;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  width: 48%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  ${(props) =>
    props.archive &&
    css`
      background: #352e80;
    `}
  ${(props) =>
    props.save &&
    css`
      background: #fff;
      color: #352e80;
    `}
`;

const Options = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  ${(props) =>
    props.status &&
    css`
      display: none;
    `}
`;

const OptionItem = styled.div`
  cursor: pointer;
  background: white;
  padding: 8px 7px;
  margin-left: 5px;
  line-height: 0;
  border-radius: 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.bg &&
    css`
      background: #6563ff;
    `}
`;

const PlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.c1 &&
    props.c2 &&
    css`
      background: linear-gradient(137deg, #${props.c1}, #${props.c2});
    `}
`;

const Card = ({ data, dispatch, edit, setUpdate }) => {
  const [show, setShow] = useState(false);
  const [favs, setFavs] = useState(false);
  const [tags, setTags] = useState("unsorted");
  const [imgUrl, setImgUrl] = useState();

  const toggleTag = (tag, article) => {
    const index = article.tags.indexOf(tag);
    if (index === -1) {
      if (tag === "archive") {
        while (article.tags.length) {
          article.tags.pop();
        }
      }
      article.tags.push(tag);
    } else {
      article.tags.splice(index, 1);
    }
    dispatch(actions.updateArticle(article._id, article));
    setFavs(!favs);
    setShow(false);
    setUpdate(true);
  };

  const updateTags = (value) => {
    const tags = value.map((tag) => tag.value);
    setTags(tags);
  };

  const saveTags = (article) => {
    article.tags = tags;
    dispatch(actions.updateArticle(article._id, article));
    setShow(false);
    setUpdate(true);
  };

  useEffect(() => {
    saveTags;
  }, [data.tags]);

  const checkImage = (url) => {
    var s = document.createElement("IMG");
    s.src = url;
    s.onerror = () => {
      setImgUrl(false);
    };
    s.onload = () => {
      setImgUrl(true);
    };
    return imgUrl;
  };

  return (
    <>
      <Options>
        <OptionItem
          onClick={() => toggleTag("favorites", data)}
          bg={data.tags.indexOf("favorites") > -1}
        >
          {data.tags.indexOf("favorites") > -1 ? (
            <FavSmallChecked />
          ) : (
            <FavSmall />
          )}
        </OptionItem>
        <OptionItem onClick={() => setShow(!show)}>
          <AddTo />
        </OptionItem>
      </Options>
      {show ? (
        <EditWrapper>
          <ContentWrapper>
            <ExitEdit onClick={() => setShow(!show)}>
              <Close />
            </ExitEdit>
            <ContentMini>
              <h1>Edit or remove tags</h1>
              {data.tags[0] === "unsorted" || data.tags[0] === "archive" ? (
                <Taglist tags={""} onChange={updateTags} />
              ) : (
                <Taglist tags={data.tags} onChange={updateTags} />
              )}
              <Buttons>
                <Button onClick={() => toggleTag("archive", data)} archive>
                  Archive
                </Button>
                <Button onClick={() => saveTags(data)} save>
                  Save
                </Button>
              </Buttons>
            </ContentMini>
          </ContentWrapper>
          <EditBlobTop />
          <EditBlobBottom />
        </EditWrapper>
      ) : (
        <>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArticleBoxOverlay>
              {data.image !== "" && checkImage(data.image) ? (
                <ArticleImage image={data.image} />
              ) : (
                <PlaceHolder
                  c1={Math.floor(Math.random() * 16777215).toString(16)}
                  c2={Math.floor(Math.random() * 16777215).toString(16)}
                />
              )}
            </ArticleBoxOverlay>
            <ArticleHeader>{data.title}</ArticleHeader>
          </a>
          <ArticleTagsWrapper>
            {data?.tags[0] === "u" || data?.tags.length === 0 ? (
              <ArticleTags onClick={() => dispatch(push("/articles/unsorted"))}>
                #unsorted
              </ArticleTags>
            ) : (
              data?.tags.map((tag) => (
                <ArticleTags
                  onClick={() =>
                    dispatch(push(`/articles/${encodeURIComponent(tag)}`))
                  }
                >
                  #{tag}
                </ArticleTags>
              ))
            )}
          </ArticleTagsWrapper>
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    articles: state.articles.articles,
  };
}

export default connect(mapStateToProps)(Card);
