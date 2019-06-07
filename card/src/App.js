import React from "react";
import "./friends.json";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      name={friends[0].name}
      image={friends[0].image}
      occupation={friends[0].ocupation}
      location={friends[0].location}
    />
    <FriendCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].ocupation}
      location={friends[1].location}
    />
    <FriendCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].ocupation}
      location={friends[2].location}
    />
  </Wrapper>
);

export default App;
