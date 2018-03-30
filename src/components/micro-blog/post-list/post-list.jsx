import React, { Component } from "react";
import Post from "../Post/post";
const posts = [
  {
    name: "Alex",
    text:
      "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein two or more pieces of bread serve as a container or wrapper for another food type.[1] [2] [3] The sandwich began as a portable finger food in the Western world, though over time it has become prevalent worldwide."
  },
  {
    name: "Alex",
    text:
      "Subway is a privately held American fast food restaurant franchise that primarily purveys submarine sandwiches (subs) and salads. Subway is one of the fastest-growing franchises in the world[2] and, as of June 2017, has approximately 45,000 stores located in more than 100 countries. More than half of the stores are located in the United States.[1] [3] [4] It is the largest single-brand restaurant chain and the largest restaurant operator in the world.[5] [6] [7] [8]"
  }
];
class PostList extends Component {
  render() {
    return posts.map(({ name, text }) => (
      <Post key={text} postText={text} name={name} />
    ));
  }
}

export default PostList;
