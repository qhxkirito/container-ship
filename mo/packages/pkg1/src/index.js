// pkg1/src/index.ts
import pkg2 from '@kirito_qhx/pkg2';
import { Base64 } from "js-base64";

function fun2() {
  pkg2();
  console.log('I am package 1');
}

export default fun2;