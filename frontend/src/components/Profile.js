import React,{useState,useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './profile.css'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
 


const Profile = props=>{

  let history = useHistory();
  let path = '/public/login';

  const [user, setUser] = useState([]);

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get('/user/userprofile').then((res)=>{
      setUser(res.data);
      }).catch(()=>{
        history.push(path);
        swal({title: "unauthorized",
        text: "Please Login First",
        icon: "warning"} ); 
    })
  }
    fetchUser();
  },[]);

  const deleteUser=(id) =>{
    swal({
        title: "Are you sure?",
        text: "Your Account Will be permenatly remove from System",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
    axios.delete(`/user/delete/${id}`).then(()=>{
          
        if (willDelete) {
          swal("The User has been deleted!", 
          {icon :"success",});  
          setTimeout(function(){
          window.location.reload();
           },1000);
        } else {
          swal("User Is Not Deleted");}
    });
  }
  })
 } 

  return(
    <>
    <br/>
    <div className="fullprofile">
      <div className="row">
        <div className="column column-img">

        <div className="profile">
       
          <center><h2 style={{fontFamily:"be vietnam" , fontSize:"30px" , fontWeight:"800" , marginTop:"20px"}}>{user.name}</h2></center>
          {/* <center><h6>{user.email}</h6></center> */}


          
       
        </div>
        </div>




        
        <div className="column column-hrline">
          <div class="vl"></div>
        </div>
        <div className="column column-profle">
        <div className="profileleft">
      <br/>

 
    <br/>
    <center><h2>My Profile Details</h2></center>
    <div>
   
   <div className="editbutton">     
   <div className="row">
     <div className="col form-floating">
       

     <Link to={"/user/update/" + user._id}>
           <IconButton aria-label="delete">
              <EditIcon fontSize="medium" color="primary"/> 
           </IconButton>
      </Link>

           <IconButton aria-label="delete"  onClick={() =>  deleteUser(user._id)}>
                <DeleteForeverIcon fontSize="medium" color="secondary"/> 
                      </IconButton> 
       </div>
     </div>              
     </div>         
     </div>

    <table className="table table-light">
        <tbody>

          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>


          <tr>
            <td>Contact Number</td>
            <td>{user.contactno}</td>
          </tr>

          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>

        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile;