import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pakpoon from './page/img/pakpoon.jpg';
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  Container,
  Image
} from 'react-bootstrap';
function App() {
  return (
    <div>
      <Container fluid>
        <Card className="text-center" style={{ width: '300px' }}>
          <Col xs={12} md={12}>
            <Image width={100} src={pakpoon} roundedCircle />
          </Col>
          <h5>ลงทะเบียนผู้ใช้งาน</h5>
          <Form>
            <Row className="mb-3">
              <Form.Group controlId="formGridState">
                <Form.Label>คำนำหน้า</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>กรุณาเลือก</option>
                  <option value="1">ชาย</option>
                  <option value="2">หญิง</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formGridEmail">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control type="name" placeholder="กรุณากรอก" />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control type="name" placeholder="กรุณากรอก" />
              </Form.Group>
            </Row>

            <Form.Group>
              <Form.Label>เพศ</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="ชาย"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="หญิง"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>เบอร์โทรศัพท์</Form.Label>
              <Form.Control type="phone" placeholder="กรุณากรอก" />
            </Form.Group>

            <Button variant="primary" type="submit">
              ถัดไป
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
