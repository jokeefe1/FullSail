import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { ContainerLarge } from '../../App.GlobalStyle';
import { AllDiv } from './SupraFooter.style';

export default function SupraFooter() {
    return (
        <ContainerLarge>
            <AllDiv>
                <div>
                    <h2>Why We're Different</h2>
                    <p>
                        See why Full Sail University is a unique place to learn.
                    </p>
                    <FaChevronRight />
                </div>
                <div>
                    <h2>Why We're Different</h2>
                    <p>
                        See why Full Sail University is a unique place to learn.
                    </p>
                    <FaChevronRight />
                </div>
            </AllDiv>
        </ContainerLarge>
    );
}
