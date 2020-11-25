import React, { Component } from 'react';
import MovieCreateForm from './movieCreateForm';

// const Modal = (props) => {

//     let closeButton = null
//     const submitModal = () => {
//         alert("submiting modal")
//         closeButton.click()
//     }

//     return (
//         <div>
//             <button type="button" className="btn btn-primary my-3" data-toggle="modal" data-target="#exampleModal">
//                 Create Movie
//             </button>
//             <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             {props.children}
//                         </div>
//                         <div className="modal-footer">
//                             <button ref={ele => closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             {
//                                 props.hasSubmit && <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Modal;

class Modal extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.closeButton = null
    }

    closeModal() {
        this.closeButton.click()
    }

    submitModal = () => {
        alert("submiting modal")
        this.closeModal()
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary my-3" data-toggle="modal" data-target="#exampleModal">
                    Create Movie
            </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button ref={ele => this.closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {
                                    this.props.hasSubmit && <button onClick={this.submitModal} type="button" className="btn btn-primary">Save changes</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;