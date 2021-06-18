import React from "react";
import {List} from "semantic-ui-react";

export function ShowcaseListPage() {

    return (
        <div>
            <div>This is a simple application showing different UI designs that I've built from semantic-ui for the web.</div>
            <List divided relaxed>
                <List.Item>
                    <List.Icon name="sign-in" />
                    <List.Content>
                        <List.Header as='a' href="/login">Login Form</List.Header>
                        <List.Description>A simple login form with sign up section to the left of the login.</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    )
}
