import React from 'react';
import { create } from "react-test-renderer";

import Loading from "../";

test("<Loading />", () => {
  const loading = create(<Loading />);
  expect(loading.toJSON()).toMatchSnapshot();
});
