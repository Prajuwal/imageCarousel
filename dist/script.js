/*
* https://frontendeval.com/questions/image-carousel
*
* Build an auto-playing image carousel
*/
const { useState, useEffect } = React;

const App = () => {
  const [newImg, setNewImg] = useState(0);
  const [imgURL, setImgURL] = useState("https://i.redd.it/award_images/t5_2qh1o/ootzpllhcnf31_ExplodeyHeart.png");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.reddit.com/r/aww/top/.json?t=all');
      const responsejson = await response.json();
      setImgURL(responsejson.data.children[0].data.all_awardings[newImg].icon_url);
      console.log(imgURL);
      // const id = setInterval(()=>{
      //   setNewImg((prevCount) => (prevCount === 25 ? 0 : prevCount + 1));
      // },3000)
      // return  () =>{
      //   clearInterval(id)
      // }
    };
    fetchData();
  }, [imgURL]);

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/

    React.createElement("img", { src: imgURL, alt: "My Image", className: "img" }), /*#__PURE__*/
    React.createElement("button", { onClick: () => setNewImg(prevCount => prevCount === 0 ? 25 : prevCount - 1) }, "left"), /*#__PURE__*/
    React.createElement("button", { onClick: () => setNewImg(prevCount => prevCount === 25 ? 0 : prevCount + 1) }, "right")));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));