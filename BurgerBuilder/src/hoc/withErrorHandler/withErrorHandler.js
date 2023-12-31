import React, { Component } from "react";
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios  ) => {
    return class extends Component {
        state = {
            error : null
        }
        componentWillMount(){
           this.reqInterceptors =  axios.interceptors.request.use(req => {
                this.setState({error : null})
                return req
            } )
            this.resInterceptors = axios.interceptors.response.use(res => res, error => {
                this.setState({error : error})
            })
            
        }

        componentWillUnmount(){
        
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }

        componentWillUnmount(){
            this.setState({
                error: null
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error : null})
        }

        render(){
            return (
                <Auxilliary >
                <Modal 
                show={this.state.error}
                modalClosed = {this.errorConfirmedHandler} >
                    {this.state.error  ?  this.state.error.message: null}
                </Modal>
                 <WrappedComponent {...this.props} />
                </Auxilliary>
            )
        }
    }
    
    
   
}


export default withErrorHandler;