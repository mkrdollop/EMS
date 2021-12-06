import React, { Fragment ,useState,useEffect} from 'react';
import '../../assets/css/style.css';
import { useParams } from "react-router-dom";
import { nanoid  } from 'nanoid';
import { Link } from 'react-router-dom';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Footer from '../../DeployHead/Footer/Footer';
import Navside from '../NavsideBar/Navside';
import {BASE_URL} from '../../http-commen';

function AddUserData() {
    const token = localStorage.getItem("token");
	const {id} = useParams();
	// console.log(id);
    const  [isShowUserData, setIsShowUserData] = useState([]);
	const [stateUser, setstate] = useState();
	const  [editUserData, setEditUserData] = useState({
        company_name:" ",
        first_name:" ",
        // country_name:" ",
        // work_timing_name:" ",
		// email:"",
		// mobile:""
    });
    // console.log(editUserData);

	// console.log(isShowUserData.company_name);
    useEffect(() => showUserHandler(), []);

	async function showUserHandler(){
        const Response = await fetch(BASE_URL+"/get_user_profile?user_id="+id,{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })
        .then(res => res.json())
        .then((result) => { 
            // console.log(result);
            setIsShowUserData(result.userData);
        },[])
    }

	 const editPageHandler = async event => {
		event.preventDefault();
        const fildName= event.target.getAttribute("name"); 
        const fildValue= event.target.value; 

        const newUserData = {...editUserData};
        newUserData[fildName] = fildValue; 
        setEditUserData(newUserData);  
        console.log(newUserData);
    }

    useEffect(() => AddUser(), []);
	async function AddUser(credentials){
		console.log(credentials);

	const Response = await fetch(BASE_URL+"/update_user_profile?user_id="+id,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'Authorization': token
			},
		})
		.then(res => res.json())
		.then((result) => { 
			console.log(result);
			// setEditUserData(result);
		},[]);
	}

	// const handleSubmit = async e => {
	// 	e.preventDefault();
	// 	AddUser({
	// 		company_name,
	// 	   	first_name
	// 	});
		
	//   }
	// async function AddUser(credentials){
    //     console.log(credentials);
    //     // let formData = new FormData();
    //     //     formData.append('company_name', credentials.company_name);
    //     //     formData.append('first_name',credentials.first_name);
    //     //     formData.append('country_name', credentials.country_name);
    //     //     formData.append('work_timing_name',credentials.work_timing_name);
    //     var details = {
    //         'company_name':credentials.company_name,
    //         'first_name':credentials.first_name,
    //         'country_name':credentials.country_name,
    //         'work_timing_name':credentials.work_timing_name,
    //      };
    //     // console.log(props.user_id);

    //     var formBody = [];
    //     for (var property in details) {
    //         var encodedKey = encodeURIComponent(property);
    //         var encodedValue = encodeURIComponent(details[property]);
    //         formBody.push(encodedKey + "=" + encodedValue);
    //      }
    //      formBody = formBody.join("&");

    //    // var updateData = [];
    //    const Response = await fetch(BASE_URL+"/update_user_profile?user_id="+id,{
    //     method: 'POST',
    //     headers: {
    //        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //        'Authorization': token
    //     },
    //     data:formBody
    // })
    // .then(res => res.json())
    // .then((result) => { 
    //     console.log("result");
    //     setEditUserData(result);
    // },[]);
    // }
	const onSubmitHandler = (event) => {
		event.preventDefault();
		console.log(event);
		const editUserList = ({
			user_id: nanoid(),
			company_name:editUserData.company_name,
			first_name:editUserData.first_name,
			email:editUserData.email,
			mobile:editUserData.mobile,
			country_name:editUserData.country_name,
			work_timing_name:editUserData.work_timing_name,
		});
		// const newStateData = [...stateUser, editUserList]
		// console.log(newStateData);
		// setstate(newStateData);
	  }
    return (
        <Fragment>
		<div className="ems-dashboard dark dark-sidebar theme-black">    
			<div className="main-wrapper main-wrapper-1">

				{/* ///////export from DeployHead/Navigations Componantes */}
				<NavbarTop />

				{/* ///////Export from SidebarNav/Sidebar Componantes */}

				<Navside />
			{/* <!-- Main Content --> */}
				<div className="main-content overflow-hidden">
					<section className="section">
						<h4 className="border-bottom pb-2 mb-4 text-dark">
							Add User Data
						</h4>
						<div className="section-body">
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="card">
										<form className="needs-validation" onSubmit={ onSubmitHandler}>
											<div className="card-header">
												<h4>Users</h4>
											</div>
											<div className="card-body">
												<div className="row">
													<div className="col-md-6"> 
														<div className="form-group">
															<label>Company Name</label>                                   
															<input onChange={editPageHandler} value={isShowUserData.company_name} type="text" className="form-control" name="company_name" required="" />
														</div>
													</div><div className="col-md-6"> 
														<div className="form-group">
															<label>Company Owner</label>                                   
															{/* <input type="hidden" name="plan_id" value=""/> */}
															<input  onChange={editPageHandler} value={isShowUserData.first_name} type="text" className="form-control" name="first_name" required="" />
														</div>
													</div>
                                                    <div className="col-md-6"> 
														<div className="form-group">
															<label>E-mail</label>                                   
															{/* <input type="hidden" name="plan_id" value=""/> */}
															<input  onChange={editPageHandler} value={isShowUserData.email} type="email" className="form-control" name="email" required="" />
														</div>
													</div>
                                                    <div className="col-md-6 no_of">
														<div className="form-group">
															<label>Mobile No.<span className="no_of_name"></span></label>
															<input  onChange={editPageHandler} value={isShowUserData.mobile} type="mobile" name="mobile" className="form-control" />
														</div>
													</div>
													{/* <div className="col-md-6 no_of">
														<div className="form-group">
															<label>Country Name<span className="no_of_name"></span></label>
															<input type="text" className="form-control" name="" required="" />
														</div>
													</div> */}
													<div className="col-md-6">
														<div className="form-group">
															<label>Role</label>
															<select className="form-control" name="role_type" id="role_type">
															<option value={isShowUserData.role_type}>{isShowUserData.role_type}</option>
															<option value="Client">Client</option>
															<option value="Employer">Employer</option>
															</select>
														</div>
													</div>
													<div className="col-md-6 ">
														<div className="form-group ">
															<label>Shift</label>
															<select className="form-control" name="work_timing_name" id="work_timing_name">
																<option value={isShowUserData.work_timing_name}>{isShowUserData.work_timing_name}</option>
																<option value="1">Day shift</option>
																<option value="1">Night shift</option>
																<option value="6">Half day</option>
															</select>
														</div>
													</div>
													<div className="col-md-6 fee">
														<div className="form-group">
															<label>Salary</label>
															<input  onChange={editPageHandler} value={isShowUserData.salary_amount} type="salary_amount" name="salary_amount" className="form-control" required=""/>
														</div>
													</div>
													
												</div>
											</div>
											<div className="card-footer text-right">
											<button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</div>
    </Fragment>
    )
}

export default AddUserData;
