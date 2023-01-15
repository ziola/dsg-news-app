import React from "react";
import Box from "./Box";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

import "./TopicsList.css";

type Topic = string;

function TopicsList({ topics, onRemove, onSelect }: {
    topics: Topic[];
    onRemove: (topic: Topic) => void;
    onSelect: (topic: Topic) => void;
}) {
    return <Box className="topics">
        <h3>Topics</h3>
        <ul>
            {topics.map(topic => (
                <li key={topic}>
                    <ButtonLink
                        onClick={() => onSelect(topic)}>
                        {topic}
                    </ButtonLink>
                    <Button onClick={() => onRemove(topic)}>X</Button>
                </li>
            ))}
        </ul>
    </Box>
}

export default React.memo(TopicsList);