import "./challenge2.css";
export default function Challenge2() {
  return (
    <div>
      <Myheader />
      <Mybody />
    </div>
  );
}

function Myheader() {
  return (
    <div className="myHeader">
      <h1 style={{ color: "white" }}>
        {" "}
        Second Challenge in React - أول تحدِِ{" "}
      </h1>
    </div>
  );
}

function Mybody() {
  return (
    <div className="myBody">
      <div className="mybuttons">
        <Buttons title="السيارات الاشهر">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpSyy78XO94MdTTLmwsLX9cF__FKFpf0Y0A&s.jpg"></img>
          </div>
        </Buttons>
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
      </div>

      <div className="posts">
        <Post
          content="هذا المنشور الأول"
          body="أكادمية ترميز لتعلم لغات البرمجة"
        >
          <h2>20</h2>
          <h2>أكادمية ترميز</h2>
        </Post>
        <Post body="this is the hello world article">
          <h3>Hello world</h3>
        </Post>
        <Post body="the is the body of Post 3">
          <h3>post 3</h3>
        </Post>
        <Post body="this is the body of post 4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpSyy78XO94MdTTLmwsLX9cF__FKFpf0Y0A&s.jpg"></img>

        </Post>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Post({
  content = "This is the post Title",
  body = "This is the post body",
  children,
}) {
  return (
    <div className="post">
      <h3>{children ? children : content} </h3>
      <hr></hr>
      <p> {body} </p>
    </div>
  );
}
function Buttons({title = "unused button", children}) {
  return (
    <button className="mybutton" onClick={M_alert}>
      {title}
        {children}
    </button>
  );
}

function M_alert() {
  return alert("Yes, You did it !");
}
