import React from 'react';
import { AllDiv, StyledChevron, StyledLink } from './SupraFooter.style';

export default function SupraFooter() {
    return (
        <AllDiv>
            <StyledLink to='/different'>
                <div>
                    <h2>Why We're Different</h2>
                    <p>
                        See why Full Sail University is a unique place to learn.
                    </p>
                </div>
                <div>
                    <StyledChevron />
                </div>
            </StyledLink>
            <StyledLink to='/different'>
                <div>
                    <h2>Explore Scholarships</h2>
                    <p>
                        View our current scholarship opportunities. Financial aid is available for those who qualify.
                    </p>
                </div>
                <div>
                    <StyledChevron />
                </div>
            </StyledLink>
        </AllDiv>
    );
}
