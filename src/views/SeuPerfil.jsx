import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class SeuPerfil extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Seu Perfil</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Nome</label>
                          <Input
                            defaultValue="Renan"
                            placeholder="Nome"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Sobrenome</label>
                          <Input
                            defaultValue="Soares"
                            placeholder="Sobrenome"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>E-mail</label>
                          <Input
                            defaultValue="renansoaresmendes@outlook.com"
                            placeholder="E-mail"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Gênero</label>
                             <Input type="select" name="select" id="exampleSelect1">
                              <option>Masculino</option>
                              <option>Feminino</option>
                              <option>Outros</option>
                          </Input>  
                         </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Data de nascimento</label>
                          <Input
                            defaultValue="13/11/1994"
                            placeholder="dd/mm/aaaa"
                            type="date"
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
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/renan.jpg")}
                      />
                      <h5 className="title">Renan Soares</h5>
                    </a>
                    <p className="description">Gerente</p>
                  </div>
                  <div className="card-description">
                    Como gerente, sou responsável por administrar os dados referentes a infraestrutura do sistema.
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SeuPerfil;
