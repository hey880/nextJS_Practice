import { Button, Header } from "semantic-ui-react";
import styles from "./Item.module.css";

export default function Item({ item }) {

  return (
    <>
      {item.map((val) => {
        return (
          <div key={val.id}>
            <div className={styles.wrap} >
              <div className={styles.img_item}>
                <img src={val.image_link} alt={val.name} />
              </div>
              <div className={styles.info_item}>
                <strong className={styles.tit_item}>{val.name}</strong>
                <strong className={styles.num_price}>${val.price}</strong>
                <span className={styles.txt_info}>
                  {val.category ? `${val.category}/` : ""}
                  {val.product_type}
                </span>
                <Button color="orange">구매하기</Button>
              </div>
            </div>
            <Header as="h3">Description</Header>
            <p style={{ paddingBottom: 20, fontSize: 18 }}>{val.description}</p>
          </div>
        );
      })}
    </>
  );
}
