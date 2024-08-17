import "./Imagecontainer.css"
import PerfumImg from '/assets/Images/Perfum.jpg'

function Imagecontainer(){
    return(
        <div id="imgcont">
            <img id="myimg" src={PerfumImg}></img>

        </div>
    )
}

export default Imagecontainer
