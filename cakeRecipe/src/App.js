import "./styles.css";

import { Form, Button, Input, Textarea } from "components/Form";
import { Card } from "components/Card";
import { Menu, MenuLink } from "components/Menu";

import { faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons";
import userImg from "static/user-photo.jpeg";
import rainbowCakeImg from "static/rainbow-cake.jpg";

export default function App() {
  return (
    <div className="App">
      <Menu>
        <MenuLink to="/" isActive>
          Link 1
        </MenuLink>
        <MenuLink to="/">Link 2</MenuLink>
        <MenuLink to="/">Link 3</MenuLink>
      </Menu>
      <Card
        title="Rainbow cake"
        date="September 20, 2021"
        userImg={userImg}
        mainImage={rainbowCakeImg}
        description="This impressive rainbow cake is the perfect way to wow your kids at their next birthday party. It’s deceptively simple to make too – all you need is basic cake ingredients and a rainbow of food colouring!"
        recipe=" You will need 6 x 20cm/8in loose bottom sandwich cake tins (approximately 4cm/1½in deep), a 20cm/8in and a 30cm/12in cake board, 2 non-slip cake mats trimmed to about 18cm/7in and 25cm/10in diameter, a turntable, a cake side scraper and 6 medium-sized piping bags. "
      />
      <Form>
        <Input />
        <Textarea />
        <Button icon={searchIcon}> Search</Button>
      </Form>
    </div>
  );
}
