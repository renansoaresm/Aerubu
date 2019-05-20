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

class CadastroDeUF extends React.Component {
  render() {
    return (
      <>
       <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Cadastrar Unidade Federativa</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="7">
                        <FormGroup>
                          <label>Nome da Unidade Federativa</label>
                          <Input
                            defaultValue="Rio de Janeiro"
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
                          <label>Sigla da Unidade Federativa</label>
                          <Input
                            defaultValue="RJ"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col className="pr-md-1" md="7">
                        <FormGroup>
                          <label>Código do país da UF</label>
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
                          <label>Quantidade da população</label>
                          <Input
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="number"
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
export default CadastroDeUF;
