import React from 'react';
import http from '../http-commen';

class EMSService{

    get_admin_dashboard () {
        return http.get("/get_admin_dashboard");
    }

    get_admin_dashboard () {
        return http.get("/get_admin_dashboard");
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default new EMSService();


