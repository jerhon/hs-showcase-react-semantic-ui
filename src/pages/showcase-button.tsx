import React from "react";
import { Link } from "react-router-dom";
import styles from "./showcase-button.module.css";
import {Button, Icon} from "semantic-ui-react";


export function ShowcaseButton()
{
    return <div className={styles.button}>
        <Link to="/" component={Button} >
            <Button.Content>
                <Icon name="arrow circle left" />
                Back to Showcase
            </Button.Content>
        </Link>
    </div>
}
