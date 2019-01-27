import React from 'react'
import { Container } from '../../App.GlobalStyle'
import { BottomSection } from './PhoneMenue.style'
import {
    FaAdjust,
    FaHornbill,
    FaItunes,
    FaMegaport,
    FaRev,
    FaShopware,
    FaStroopwafel,
    FaChevronRight
} from 'react-icons/fa';

export default function PhoneMenu() {
  return (
      <Container>
          <BottomSection>
              <div>
                  <FaItunes />
                  <p>Music and Recording</p>
              </div>
              <div>
                  <FaMegaport />
                  <p>Games</p>
              </div>
              <div>
                  <FaHornbill />
                  <p>Art & Design</p>
              </div>
              <div>
                  <FaRev />
                  <p>Film & Television</p>
              </div>
              <div>
                  <FaAdjust />
                  <p>Technology</p>
              </div>
              <div>
                  <FaStroopwafel />
                  <p>Media & Communications</p>
              </div>
              <div>
                  <FaRev />
                  <p>Business</p>
              </div>
              <div>
                  <FaShopware />
                  <p>Sports</p>
              </div>
          </BottomSection>
      </Container>
  )
}
