
module.exports = app => {

    /* =============== Webservice API ================ */
    const LoginSignup = require("../controller/Webservice/LoginSignupController.js");
    const WorkTimeController = require("../controller/Webservice/WorkTimeController.js");
    const UserController = require("../controller/Webservice/UserController.js");
    const DepartmentBranchController = require("../controller/Webservice/DepartmentBranchController.js");
    const ConfigurationController = require("../controller/Webservice/ConfigurationController.js");
    const HolidayController = require("../controller/Webservice/HolidayController.js");
    const ReportsController = require("../controller/Webservice/ReportsController.js");
    const PunchingController = require("../controller/Webservice/PunchingController.js");
    const EmployeeController = require("../controller/Webservice/EmployeeController.js");
    const AttendanceController = require("../controller/Webservice/AttendanceController.js");
    const CalanderController = require("../controller/Webservice/CalanderController.js");
    const WebController = require("../controller/Webservice/WebController.js");
    const FAQController = require("../controller/Webservice/FAQController.js");
    const PrivacyController = require("../controller/Webservice/PrivacyController.js");
    const ChatController = require("../controller/Webservice/ChatController.js");
    const SalaryController = require("../controller/Webservice/SalaryController.js");

    /* =============== Super Admin API ================ */
    const PlanController = require("../controller/Admin/PlanController");
    const AdminLogin = require("../controller/Admin/AdminLogin");
    const AdminCommonController = require("../controller/Admin/AdminCommonController");
    const AdminDetailsControler = require("../controller/Admin/AdminDetailsControler");
    const NotificationController = require("../controller/Admin/NotificationController");

    /////////////Create Login Signup routes
    
    app.get("/get_all_country", LoginSignup.get_all_country);
    app.get("/get_emp_strength", LoginSignup.get_emp_strength);
    app.post("/login", LoginSignup.login);
    app.post("/signup", LoginSignup.signup);
    app.post("/match_otp", LoginSignup.match_otp);
    app.post("/resend_otp", LoginSignup.resend_otp);
    app.post("/email_varification", LoginSignup.email_varification);
    app.post("/complete_signup", LoginSignup.complete_signup);

    //////////////////WorkTImeController
    app.get("/get_all_work_timing", WorkTimeController.get_all_work_timing);
    app.get("/get_work_time_type", WorkTimeController.get_work_time_type);
    app.get("/get_time_zone", WorkTimeController.get_time_zone);
    app.post("/add_user_work_time", WorkTimeController.add_user_work_time);
    app.get("/get_work_timing_content", WorkTimeController.get_work_timing_content);
    app.delete("/delete_worktime", WorkTimeController.delete_worktime);
    //app.get("/get_employee", WorkTimeController.get_employee);

    /////////////////UserController
    app.put("/change_forgot_password", UserController.change_forgot_password);
    app.put("/change_user_password", UserController.change_user_password);
    app.get("/get_user_profile", UserController.get_user_profile);
    app.post("/update_user_profile", UserController.update_user_profile);
    app.put("/update_fcm_id", UserController.update_fcm_id);
    app.put("/remove_logo_banner", UserController.remove_logo_banner);
    app.post("/delete_suspend_user", UserController.delete_suspend_user);
    app.post("/add_bank_salary", UserController.add_bank_salary);

    /////////////////DepartmentBranchController
    
    app.get("/get_department_branch", DepartmentBranchController.get_department_branch);
    app.delete("/delete_department_branch", DepartmentBranchController.delete_department_branch);
    app.post("/add_department_branch", DepartmentBranchController.add_department_branch);

    ////////////////Configuration
    app.get("/get_configuration", ConfigurationController.get_configuration);
    app.put("/update_configuration", ConfigurationController.update_configuration);
    app.get("/get_currency", ConfigurationController.get_currency);

    //////////////HolidayController
    app.post("/add_holiday", HolidayController.add_holiday);
    app.get("/get_holiday", HolidayController.get_holiday);
    app.delete("/delete_holiday", HolidayController.delete_holiday);
    app.get("/get_holiday_year", HolidayController.get_holiday_year);
    app.post("/add_holiday_year", HolidayController.add_holiday_year);

    ///////////////////reports
    // app.get("/get_reports_type", ReportsController.get_reports_type);
    // app.get("/get_generat_reports", ReportsController.get_generat_reports);

    /////////////////Punching
    app.post("/add_punch", PunchingController.add_punch);
    app.put("/change_punch_status", PunchingController.change_punch_status);
    app.post("/punch_out", PunchingController.punch_out);
    //app.get("/get_punch", PunchingController.get_punch);
    app.put("/add_overtime", PunchingController.add_overtime);
    app.put("/delete_punch", PunchingController.delete_punch);

    /////////////////EmployeeController
    app.post("/add_employee", EmployeeController.add_employee);
    app.get("/get_employee", EmployeeController.get_employee);
    app.get("/get_employee_by_id", EmployeeController.get_employee_by_id);
    
    /////////////////AttendanceController
    app.get("/get_attendance_type", AttendanceController.get_attendance_type);
    app.get("/get_punch", AttendanceController.get_punch);

    //////////////////CalanderController
    app.get("/add_calander", CalanderController.add_calander);
    app.get("/get_calander", CalanderController.get_calander);

    ////////////////////////////web contant WebController
    app.get("/get_terms_and_condition", WebController.get_terms_and_condition);
    app.get("/get_about", WebController.get_about);

    ///////////////////// web contant Get FAQ
    app.get("/get_faq", FAQController.get_faq);

    ////////////////// web contant Get PrivacyAndPolicy
    app.get("/get_privcy_policy",PrivacyController.get_privcy_policy);

    ////////////////////////////////get user salary 
    app.get("/get_salary",SalaryController.get_salary);

    ///////////////////////////chat support
    app.post("/add_support_chat",ChatController.add_support_chat);
    app.get("/get_support_chat",ChatController.get_support_chat);
    
     //////////////////////////////////admin plan
     app.post("/admin_add_plan", PlanController.admin_add_plan);
     app.get("/admin_get_all_plan", PlanController.admin_get_all_plan);
     app.get("/get_admin_plan_by_user", PlanController.get_admin_plan_by_user);

     //////////////////////////AdminCommonController
     app.get("/admin_get_user_list",AdminCommonController.admin_get_user_list);
    //  app.put("/update_user_by_admin",AdminCommonController.update_user_by_admin);

    // .......................login web supper admin routes.........
    app.post("/admin_login", AdminLogin.admin_login);
    app.put("/admin_forgot_password", AdminLogin.admin_forgot_password);
    app.put("/admin_match_otp", AdminLogin.admin_match_otp);
    app.put("/admin_change_forgot_password", AdminLogin.admin_change_forgot_password);

    //.....................AdminDetailsControler.................
    app.post("/get_admin_profile",AdminDetailsControler.get_admin_profile);
    app.put("/update_admin_profile",AdminDetailsControler.update_admin_profile);

    //...................NotificationController................
    app.get("/get_all_notification",NotificationController.get_all_notification);

};