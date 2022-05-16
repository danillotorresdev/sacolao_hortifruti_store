import React from 'react';

import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer';
import { ICart } from '../../pages/Dashboard/types';
import { IPDFFile } from './types';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#c2bcbc',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#698485',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  itemName: {
    fontSize: 12,
    marginBottom: 5,
  },

  internalContent: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
});

const PDFFile = ({ cartItems, totalPrice, quantityItems }: IPDFFile) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Comprovante</Text>
        {cartItems.map((item: ICart) => (
          <View key={item.id}>
            <View style={styles.itemName}>
              <Text>{item.name}</Text>
            </View>
            <View style={styles.internalContent}>
              <View>
                <Text>Quantidade {item.quantity}</Text>
              </View>
              <View>
                <Text> Preço unitário R$ {item.unityPrice}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <Text>Quantidade de itens: {quantityItems}</Text>
      <Text>Total da compra: R$ {totalPrice}</Text>
    </Page>
  </Document>
);

export default PDFFile;
