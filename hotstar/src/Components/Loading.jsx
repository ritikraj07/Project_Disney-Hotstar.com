const loadingStyle = {
    width: "100px",
    margin: "0 auto",
    color: "#fff",
};

const Loading = () => {
    return (
        <div >
            <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" style={loadingStyle} />
            {/* <p style={loadingStyle}> Loading .....</p> */}
        </div>
    );
};

export default Loading;