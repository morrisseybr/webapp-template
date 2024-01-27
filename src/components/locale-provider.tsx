"use client";

import moment from "moment";
import "moment/locale/pt-br";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  moment.locale("pt-br");
  return children;
}
