

function BlogItem(props){
    const {Photo}= props;
    return (
        <div className="">
                <img src={Photo} alt="" className="aspect-[284/160] w-full bg-green-300" ></img>
                <p>Flores Road trip 3D2N</p>
        </div>
    );
}
export default BlogItem;