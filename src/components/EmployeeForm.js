import React, { Component } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { CardSection, Input } from "./common";
import { employeeUpdate } from "../actions";

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                {/* First Card Section */}
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Ahmad"
                        value={this.props.name}
                        onChangeText={(text) => this.props.employeeUpdate({ prop: "name", value: text })}
                    />
                </CardSection> {/* End of First Card Section */}
                {/* Second Card Section */}
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={(text) => this.props.employeeUpdate({ prop: "phone", value: text })}
                    />
                </CardSection>{/* End of Second Card Section */}
                {/* Third Card Section */}
                <CardSection style={{ flexDirection: "column" }}>
                    <Text style={styles.pickerLabelStyle} >Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={(day) => this.props.employeeUpdate({ prop: "shift", value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item lable="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection> {/* End of Third Card Section */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});


const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);