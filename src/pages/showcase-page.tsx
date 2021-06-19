import React,  { useCallback, useState} from "react";
import {Card, Container, Input, Menu, Message } from "semantic-ui-react";
import styles from "./showcase-page.module.css"
import data from "./pages.json"

export interface ShowcaseItem {
    name: string,
    description: string,
    url: string,
    imageUrl?: string
}

export function ShowcasePage() {

    const [results, setResults] = useState<ShowcaseItem[]>(data.showcases);

    const searchCallback = useCallback((event: any) => {
        const value = event?.target?.value
        if (value) {
            setResults(data.showcases.filter((r) => r.name.includes(value) || r.description.includes(value)))
        } else {
            setResults(data.showcases)
        }
    }, [])

    const cards = results.length > 0 ? <Card.Group centered>
        {results.map((sc) => <Card key={sc.url} href={sc.url} className={styles.card} header={sc.name} description={sc.description} image={sc.imageUrl} />)}
    </Card.Group> : <Message content="No results..." icon={{ name: "warning sign" }} />

    return (
        <div>
            <Menu borderless compact attached="top" stackable>
                <Container>
                    <Menu.Item header className={styles.header}>
                        <img src="/images/honlsoft.svg" alt="Honlsoft Logo" />
                        <h1>Honlsoft Showcase</h1>
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Input placeholder="Search..." icon={{ name: 'search' }}   onChange={searchCallback} />
                    </Menu.Item>
                </Container>
            </Menu>
            <Container>
                <div className={styles.description}>This is a simple application showing different UI designs in React and semantic-ui built by me.  When in an individual page, click the button in the lower right to go back to this listing page.  The pages have been built out in single folders.  Feel free to copy a folder into your project for a quick start on a particular layout or design.</div>
                {cards}
            </Container>
        </div>
    )
}
