import { Container, Header, Span, Section, Image, Tab, Planet, Title, Info, Data, DataInfo, DataP, DataSpan } from "../style/destination/styled";
import moon from "../assets/destination/image-moon.png";
import { useState } from "react";

// TODO: przeczytaj o require
const data = require("../data.json");


export const Destination = () => {
    const [destinationId, setDestinationId] = useState(0);

    // Data of Destination from data
    const {name, images, description, distance, travel} = data.destinations[destinationId];

     const change = (e, id) => {
        e.preventDefault();
        setDestinationId(id);
    }

    return (
        <>
             <div className="destination-names">
                        <a href="#" onClick={(e) => change(e,0)}>Moon</a>
                        <a href="#" onClick={(e) => change(e,1)}>Mars</a>
                        <a href="#" onClick={(e) => change(e,2)} >Europa</a>
                        <a href="#" onClick={(e) => change(e,3)} >Titan</a>
            </div>
            <Container>
                <Header><Span>01</Span>Pick your destination</Header>
                <Section>
                    <Image src={moon} alt="moon" />
                     <Tab>
            <Planet>
                            <Title>{ name}</Title>
                <Info>{description}</Info>
            </Planet>
            <Data>
                <DataInfo>
                    <DataP className="">Avg. distance</DataP>
                    <DataSpan>{distance}</DataSpan>
                </DataInfo>
                <DataInfo>
                    <DataP className="">Est. travel time</DataP>
                    <DataSpan className="">{travel}</DataSpan>
                </DataInfo>
            </Data>
        </Tab>
            </Section>
        </Container>
        </>
        // <>
        //     <Container>
        //         <Header><Span>01</Span>Pick your destination</Header>
        //         <Section>
        //             <Image src={moon} alt="moon" />
        //              <Tab>
        //     <Planet>
        //         <Title>Moon</Title>
        //         <Info>See our planet as you’ve never seen it before. A perfect relaxing trip away to
        //             help regain perspective and come back refreshed. While you’re there, take in some history by visiting the
        //             Luna 2 and Apollo 11 landing sites.</Info>
        //     </Planet>
        //     <Data>
        //         <DataInfo>
        //             <DataP className="">Avg. distance</DataP>
        //             <DataSpan>384,400 km</DataSpan>
        //         </DataInfo>
        //         <DataInfo>
        //             <DataP className="">Est. travel time</DataP>
        //             <DataSpan className="">3 days</DataSpan>
        //         </DataInfo>
        //     </Data>
        // </Tab>
        //     </Section>
        // </Container>
        // </>
    )
}