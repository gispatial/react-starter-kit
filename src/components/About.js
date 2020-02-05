import React from 'react';
import {
  Row, Col, Jumbotron, Container,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faPalette, faMoneyBillWave, faCertificate, faPlus, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Template from './Templates/Dashboard';

const About = () => (
  <Template pageTitle="Salam Warga Selangor!" noPadding>
    <React.Fragment>
      <Container>
        <Row>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faTachometerAlt} />
              {' '}
              Sistem Smart Inisiatif Peduli Rakyat
            </h3>
            <img src="http://gispatial.tech/wp-content/uploads/2020/02/res.png" width="100%" />
            <p></p>

              <Row className="mb-2 mt-md-5">
                <Jumbotron className="bg-danger text-white rounded-0">
                  <h2>Tahniah !</h2>
                  <p className="lead">
                    Serta Terima Kasih kerana Menggunakan Aplikasi Ini. Manfaat istimewa untuk warga Selangor yang layak dan LAHIR hingga AKHIR HAYAT!
                  </p>
                </Jumbotron>
              </Row>
            <p>Status Permohonan.</p>
            <p><Link to="/articles" className="btn btn-primary">0 IPR Dimohon</Link></p>
            <p><Link to="/articles" className="btn btn-primary">0 IPR Lulus</Link></p>
            <p><Link to="/articles" className="btn btn-primary">0 IPR Ditolak</Link></p>
            <p><Link to="/articles" className="btn btn-primary">0 IPR Notifikasi</Link></p>

            <p><Link to="/articles" className="btn btn-primary">8 IPR Ditawarkan</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faPalette} />
              {' '}
              Senarai Program Dipohon
            </h3>
            <p>Status Permohonan.</p>
            <p><Link to="/articles" className="btn btn-primary">Tiada</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faMoneyBillWave} />
              {' '}
              Skim Peduli Sihat (SPR)
            </h3>
            <img src="http://gispatial.tech/wp-content/uploads/2020/02/icon_ssipr_kesihatan_skim_peduli_sihat.png" width="100%" />
            <p>klik tombol untuk menyemak status.</p>
            <p><Link to="/articles" className="btn btn-primary">Semak</Link></p>
          </Col>
        </Row>
        <Row>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faCertificate} />
              {' '}
              Skim Rumah Selangorku
            </h3>
            <img src="http://gispatial.tech/wp-content/uploads/2020/02/rumahsgor.jpg" width="100%" />
            <p>klik tombol untuk menyemak status.</p>
            <p><Link to="/articles" className="btn btn-primary">Semak</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faPlus} />
              {' '}
              Bantuan Sihat Selangor
            </h3>
            <img src="http://gispatial.tech/wp-content/uploads/2020/02/icon_ssipr_kesihatan_bantuan_sihat_selangor.png" width="100%" />
            <p>klik tombol untuk menyemak status.</p>
            <p><Link to="/articles" className="btn btn-primary">Semak</Link></p>
          </Col>
          <Col md="4" className="mt-3">
            <h3>
              <FontAwesomeIcon icon={faUserCircle} />
              {' '}
              Skim Kesihatan Wanita (Mammosel)
            </h3>
            <img src="http://gispatial.tech/wp-content/uploads/2020/02/icon_ssipr_kesihatan_-_skim_kesihatan_wanita.png" width="100%" />
            <p>klik tombol untuk menyemak status.</p>
            <p><Link to="/articles" className="btn btn-primary">Semak</Link></p>
          </Col>
        </Row>
      </Container>

      <hr className="mt-5" />


    </React.Fragment>
  </Template>
);

export default withRouter(About);
