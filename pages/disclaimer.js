import styled from 'styled-components';
import Layout from '../components/Layout';
import { Container } from '../components/styles/Tools';
import { DarkBlue, Blue } from '../components/styles/Colors';

const Background = styled.div`
  background-color: ${DarkBlue};
`;

const ContainerBackground = styled.div`
  background-color: #fff;
  padding: 20px 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  h1 {
    color: ${Blue};
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
`;

const Disclaimer = () => (
  <Layout>
    <Background style={{ paddingTop: '87.328px' }}>
      <Container>
        <ContainerBackground>
          <h1>Disclaimer</h1>
          <p>
            The content of this web site has been written or gathered by Duggan
            Law Firm, P.C. and its representatives for informational purposes
            only. It is not intended to be and is not considered to be legal
            advice, nor as proposing any type of transaction. You should consult
            an attorney for advice regarding your individual situation. We
            invite you to contact us and welcome your calls, letters and
            electronic mail.
          </p>
          <p>
            No communication between you and Duggan Law Firm, P.C. via this web
            site should be interpreted as establishing an attorney/client
            relationship. Do not use the applied e-mail interface to send any
            privileged or confidential information. Internet messages can be
            intercepted. Further, we cannot maintain the confidentiality of
            information received outside of an attorney/client relationship.
          </p>
          <p>
            In order to preserve and safeguard relationships with our current
            and former clients, Duggan Law Firm, P.C. must observe certain
            formalities before agreeing to represent anyone in a particular
            matter.
          </p>
          <p>
            Our duties to existing and former clients require us, before
            assuming any new matters, to determine whether or not we may
            represent or advise you in light of any actual or potential
            conflicts with our existing or former clients or duties that the
            firm may owe.  Until those prerequisites are completed, you should
            not consider any communication with us by letter, facsimile
            transmission, telephone, Internet, e-mail or otherwise as privileged
            or confidential.
          </p>
        </ContainerBackground>
      </Container>
    </Background>
  </Layout>
);

export default Disclaimer;
