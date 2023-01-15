import React, { useCallback } from "react";
import Box from "./Box";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import type { Domain } from "./useDomains";
import "./DomainsList.css";



function DomainsList({ domains, onRemove, onSelect, onUnselect, selectedDomain }: {
    domains: Domain[];
    selectedDomain: Domain;
    onRemove: (domain: Domain) => void;
    onSelect: (domain: Domain) => void;
    onUnselect: (domain: Domain) => void;
}) {

    const handleClick = useCallback((domain: Domain) => {
        selectedDomain === domain ? onUnselect(domain) : onSelect(domain)
    }, [onSelect, onUnselect, selectedDomain]);

    return <Box className="domains">
        <h3>Domains</h3>
        <ul>
            {domains.map(domain => (
                <li key={domain}>
                    <ButtonLink
                        onClick={() => handleClick(domain)}>
                        {domain}{selectedDomain === domain ? " (selected)" : ""}
                    </ButtonLink>
                    <Button onClick={() => onRemove(domain)}>X</Button>
                </li>
            ))}
        </ul>
    </Box>
}

export default DomainsList;