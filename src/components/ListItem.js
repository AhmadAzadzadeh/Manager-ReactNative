import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";

class ListItem extends Component {
    onRowPress () {
        Actions.employeeEdit({employee: this.props.employee});
    }
    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.textStyle} >{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        paddingLeft: 15,
        fontSize: 18
    }
});

export default ListItem;