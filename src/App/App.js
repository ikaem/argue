import React, { useState, useContext, useEffect } from 'react';

import './App.styles.css';
import { posts } from "../assets/fakeDB";

import Header from '../components/header.component/header.component';
import User from "../components/user.component/user.component";
import NewPost from '../components/new-post.container/new-post.container';
import Topics from "../components/topics.component/topics.component";
import Posts from "../components/posts.component/posts.component";
import Replies from '../components/replies.component/replies.component';
import Footer from '../components/footer.component/footer.component';
import UserContextProvider from "../contexts/UserContext";
import ReplyContextProvider from "../contexts/ReplyContext";



const App = () => {
  // not sure if posts should be here at all
  const [posts, setPosts] = useState([]);
  const [fetchPostsTrigger, setFetchPostsTrigger] = useState(0);
  const [isReplyMode, setIsReplyMode] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPostsPage, setCurrentPostsPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const fetchPostsResponse = await fetch(`http://localhost:4000/posts/${currentPostsPage}`);
        const jsonedFetchPostsResponse = await fetchPostsResponse.json();
        if(jsonedFetchPostsResponse.message !== "posts successfully retrieved") throw new Error(jsonedFetchPostsResponse.message);
        setPosts(jsonedFetchPostsResponse.data.sortedPosts);
        setTotalPosts(jsonedFetchPostsResponse.data.totalPosts)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchPosts();
    console.log("fetch happened");
  },[fetchPostsTrigger, currentPostsPage]);

  return (
    <>
      <UserContextProvider>
        <Header/>

          <User/>
          <NewPost
            setFetchPostsTrigger={setFetchPostsTrigger}
          />
          <ReplyContextProvider isReplyMode={isReplyMode} setIsReplyMode={setIsReplyMode}>
            <Posts
              posts={posts.slice().sort((a,b) => a.id - b.id)}
              postPages={Array(Math.ceil(totalPosts/4)).fill().map((v,i) => v = i + 1)}
              currentPostsPage={currentPostsPage}
              setCurrentPostsPage={setCurrentPostsPage}
              setFetchPostsTrigger={setFetchPostsTrigger}
              />
            {isReplyMode && <Replies/>}
          </ReplyContextProvider>
        </UserContextProvider>
        <Topics/>
        
      <Footer/>
    </>
  );
}

export default App;
