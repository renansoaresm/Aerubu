import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class CadastroDoAeroporto extends React.Component {
  render() {
    return (
      <>
       <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Cadastrar Aeroporto</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="7">
                        <FormGroup>
                          <label>Código do Aeroporto</label>
                          <Input
                            defaultValue="0101"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="7">
                        <FormGroup>
                          <label>Nome da cidade</label>
                          <Input
                            defaultValue="Rio de Janeiro"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col className="pr-md-1" md="7">
                        <FormGroup>
                          <label>Código do país </label>
                          <Input
                            defaultValue="RJ"
                            placeholder="Company"
                            type="select"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                      </Col>
                    </Row>
                    <Row>
                      <Col md="7">
                        <FormGroup>
                          <label>Sigla da UF</label>
                          <Input
                            defaultValue=""
                            placeholder=""
                            type="select"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Salvar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4"> 
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default CadastroDoAeroporto;
