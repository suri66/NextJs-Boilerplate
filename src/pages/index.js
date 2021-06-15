import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFakeData } from 'redux/app';

const Home = () => {
  const content = useSelector((state) => state.app.data);
  const dispatch = useDispatch();
console.log(content);
  return (
    <div className="my-2">
      Home Page
      <br />
      <input
        type="button"
        value="click to dispatch getFakeData method"
        onClick={() => dispatch(getFakeData())}
      />
    </div>
  );
};

export default Home;
