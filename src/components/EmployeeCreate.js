import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import { Card, CardSection, Button } from "./common";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || "Monday"});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                {/* Fourth Card Section */}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >Create</Button>
                </CardSection> {/* End of Fourth Card Section */}

            </Card>
        );
    }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);