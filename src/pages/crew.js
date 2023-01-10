import {
    Container, Header, HeaderSpan, Section, Image, CrewNavigation, MenuList, Link, Span, SectionCrew, Role, Name, Info, PersonInfo
} from "../style/crew/styled";
import commander from "../assets/crew/image-douglas-hurley.png";
import specialist from "../assets/crew/image-mark-shuttleworth.png";
import pilot from "../assets/crew/image-victor-glover.png";
import engieneer from "../assets/crew/image-anousheh-ansari.png";
import { useState } from "react";

const data = require("../data.json");

export const Crew = () => {

    const [crewId, setCrewId] = useState(0);

    const { name, role, bio } = data.crew[crewId];

    const change = (e, id) => {
        e.preventDefault();
        setCrewId(id);
    };

    const image = () => {
        if (role === "Commander") {
            return commander;
        } else if (role === "Mission Specialist") {
            return specialist;
        } else if (role === "Pilot") {
            return pilot;
        } else {
            return engieneer;
        }
    };

    return (
        <>
            <Container>
            <Header>
                <HeaderSpan>02</HeaderSpan> Meet your crew
            </Header>
                <Section>
                    <Image src={image()} name={name} alt="photo of the crew" />
                    <SectionCrew>
                          <CrewNavigation>
                                 <MenuList>
                                    <Link to="/" onClick={(e) => change(e, 0)}><Span></Span></Link>
                                    <Link to="/" onClick={(e) => change(e, 1)}><Span></Span></Link>
                                    <Link to="/" onClick={(e) => change(e, 2)}><Span></Span></Link>
                                    <Link to="/" onClick={(e) => change(e, 3)}><Span></Span></Link>
                                </MenuList>
                        </CrewNavigation>
                        <PersonInfo>
                            <Role>{role}</Role>
                            <Name>{name}</Name>
                            <Info>{bio}</Info>
                        </PersonInfo>    
                    </SectionCrew>
                </Section>
            </Container>
        </>
    )
};