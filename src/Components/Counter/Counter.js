import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moduleName: "configuration",
            activityName: "Item Category",
            isCreate: false,
            isView: false,
            isEdit: false,
            isDelete: false,
            isApprove: false


        };
        this.handleCheckBox = this.handleCheckBox.bind(this)
    }
    handleCheckBox (event){
        this.setState({
            [event.target.name]: [event.target.checked]
            // isCreate:event.target.checked,
            // isView:event.target.checked

        })
    }
    render() {
        const { moduleName, activityName, isCreate, isView,isEdit, isDelete, isApprove } = this.state;
        return (
            <div>{

                
                }
                <Table striped bordered hover>
                    <thead >
                        <tr>
                            <td>Module Name</td>
                            <td>activity Name</td>
                            <td>Create</td>
                            <td>View</td>
                            <td>Edit</td>
                            <td>Delete</td>
                            <td>Approve</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{moduleName}</td>
                            <td>{activityName}</td>
                            <td>
                            <input type="Checkbox" name="isCreate" checked={isCreate} onChange={this.handleCheckBox} />
                            </td>
                            <td>
                            <input type="Checkbox" name="isView" checked={isView} onChange={this.handleCheckBox} />
                            </td>
                            <td>
                               <input type="Checkbox" name="isEdit" checked={isEdit} onChange={this.handleCheckBox} />
                            </td>
                            <td>
                               <input type="Checkbox" name="isDelete" checked={isDelete} onChange={this.handleCheckBox} />
                            </td>
                            <td>
                                <input type="Checkbox" name="isApprove" checked={isApprove} onChange={this.handleCheckBox} />
                            </td>
                        </tr>
                    </tbody>
                </Table>

                isCreate:{isCreate.toString()}
                <br/>
                isView:{isView.toString()}
                <br/>
                isEdit:{isEdit.toString()}
                <br/>
                isDelete:{isDelete.toString()}
                <br/>
                isApprove:{isApprove.toString()}
                
                
                
                
                {/* <button onClick={() => console.log(this.state)}>show data</button> */}
            </div>
        )
    }
}
export default Counter