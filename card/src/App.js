import React from "react";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      name={friends[0].name}
      image={friends[0].image}
      ocupation={friends[0].ocupation}
      years={friends[0].years}
    />
    <FriendCard
      name={friends[1].name}
      image={friends[1].image}
      ocupation={friends[1].ocupation}
      years={friends[1].years}
    />
    <FriendCard
      name={friends[2].name}
      image={friends[2].image}
      ocupation={friends[2].ocupation}
      years={friends[2].years}
    />
  </Wrapper>
);

export default App;
