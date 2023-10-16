// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";
import QuotesSvg from "../assets/quotes.svg";

var quotes = QuotesSvg;

function FeedbackCard(props) {
  var card = props.card;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("img", {
                      className: "w-[42.6px] h-[27.6px] object-contain",
                      alt: "double_quotes",
                      src: quotes
                    }),
                JsxRuntime.jsx("p", {
                      children: card.content,
                      className: "font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10"
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("img", {
                              className: "w-[48px] h-[48px] rounded-full",
                              alt: card.name,
                              src: card.img
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("h4", {
                                      children: card.name,
                                      className: "font-poppins font-semibold text-[20px] leading-[32px] text-white"
                                    }),
                                JsxRuntime.jsx("p", {
                                      children: card.title,
                                      className: "font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"
                                    })
                              ],
                              className: "flex flex-col ml-4"
                            })
                      ],
                      className: "flex flex-row"
                    })
              ],
              className: "flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
            });
}

var make = FeedbackCard;

export {
  quotes ,
  make ,
}
/* quotes Not a pure module */
