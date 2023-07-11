export const premiumBillingAnswer = {
    "$id": "premiumBillingAnswer",
    "type": "object",
    "default": {},
    "title": "simple-bot-answer",
    "required": [
        "activities",
        "watermark"
    ],
    "properties": {
        "activities": {
            "type": "array",
            "default": [],
            "title": "The activities Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "type",
                    "id",
                    "timestamp",
                    "channelId",
                    "from",
                    "conversation",
                    "locale",
                    "text",
                    "inputHint",
                    "replyToId"
                ],
                "properties": {
                    "type": {
                        "type": "string",
                        "title": "The type Schema",
                        "examples": [
                            "message"
                        ]
                    },
                    "id": {
                        "type": "string",
                        "title": "The id Schema",
                        "examples": [
                            "4rgbUEdpCtb4QDFiP8B7Yd-us|0000007",
                            "4rgbUEdpCtb4QDFiP8B7Yd-us|0000008"
                        ]
                    },
                    "timestamp": {
                        "type": "string",
                        "title": "The timestamp Schema",
                        "examples": [
                            "2022-06-29T11:05:05.6678677Z",
                            "2022-06-29T11:05:05.7572014Z"
                        ]
                    },
                    "channelId": {
                        "type": "string",
                        "title": "The channelId Schema",
                        "examples": [
                            "webchat"
                        ]
                    },
                    "from": {
                        "type": "object",
                        "title": "The from Schema",
                        "required": [
                            "id",
                            "name"
                        ],
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "The id Schema",
                                "examples": [
                                    "HPD-MEMBERBOT-DEV"
                                ]
                            },
                            "name": {
                                "type": "string",
                                "title": "The name Schema",
                                "examples": [
                                    "HPD-MEMBERBOT-DEV"
                                ]
                            }
                        },
                        "examples": [{
                            "id": "HPD-MEMBERBOT-DEV",
                            "name": "HPD-MEMBERBOT-DEV"
                        },
                        {
                            "id": "HPD-MEMBERBOT-DEV",
                            "name": "HPD-MEMBERBOT-DEV"
                        }]
                    },
                    "conversation": {
                        "type": "object",
                        "title": "The conversation Schema",
                        "required": [
                            "id"
                        ],
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "The id Schema",
                                "examples": [
                                    "4rgbUEdpCtb4QDFiP8B7Yd-us"
                                ]
                            }
                        },
                        "examples": [{
                            "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
                        },
                        {
                            "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
                        }]
                    },
                    "locale": {
                        "type": "string",
                        "title": "The locale Schema",
                        "examples": [
                            "en-US"
                        ]
                    },
                    "text": {
                        "type": "string",
                        "title": "The text Schema",
                        "examples": [
                            "Your total amount due is $224.73. You can view your current balance, make a payment, or set up autopay by visiting the billing portal.\n                        __[Premium Payments](#/main/content/view-pay-premium-bills)__",
                            "What else can I do for you?"
                        ]
                    },
                    "inputHint": {
                        "type": "string",
                        "title": "The inputHint Schema",
                        "examples": [
                            "acceptingInput",
                            "expectingInput"
                        ]
                    },
                    "replyToId": {
                        "type": "string",
                        "title": "The replyToId Schema",
                        "examples": [
                            "4rgbUEdpCtb4QDFiP8B7Yd-us|0000006"
                        ]
                    }
                },
                "examples": [{
                    "type": "message",
                    "id": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000007",
                    "timestamp": "2022-06-29T11:05:05.6678677Z",
                    "channelId": "webchat",
                    "from": {
                        "id": "HPD-MEMBERBOT-DEV",
                        "name": "HPD-MEMBERBOT-DEV"
                    },
                    "conversation": {
                        "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
                    },
                    "locale": "en-US",
                    "text": "Your total amount due is $224.73. You can view your current balance, make a payment, or set up autopay by visiting the billing portal.\n                        __[Premium Payments](#/main/content/view-pay-premium-bills)__",
                    "inputHint": "acceptingInput",
                    "replyToId": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000006"
                },
                {
                    "type": "message",
                    "id": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000008",
                    "timestamp": "2022-06-29T11:05:05.7572014Z",
                    "channelId": "webchat",
                    "from": {
                        "id": "HPD-MEMBERBOT-DEV",
                        "name": "HPD-MEMBERBOT-DEV"
                    },
                    "conversation": {
                        "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
                    },
                    "locale": "en-US",
                    "text": "What else can I do for you?",
                    "inputHint": "expectingInput",
                    "replyToId": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000006"
                }]
            },
            "examples": [
                [{
                    "type": "message",
                    "id": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000007",
                    "timestamp": "2022-06-29T11:05:05.6678677Z",
                    "channelId": "webchat",
                    "from": {
                        "id": "HPD-MEMBERBOT-DEV",
                        "name": "HPD-MEMBERBOT-DEV"
                    },
                    "conversation": {
                        "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
                    },
                    "locale": "en-US",
                    "text": "Your total amount due is $224.73. You can view your current balance, make a payment, or set up autopay by visiting the billing portal.\n                        __[Premium Payments](#/main/content/view-pay-premium-bills)__",
                    "inputHint": "acceptingInput",
                    "replyToId": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000006"
                },
                {
                    "type": "message",
                    "id": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000008",
                    "timestamp": "2022-06-29T11:05:05.7572014Z",
                    "channelId": "webchat",
                    "from": {
                        "id": "HPD-MEMBERBOT-DEV",
                        "name": "HPD-MEMBERBOT-DEV"
                    },
                    "conversation": {
                        "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
                    },
                    "locale": "en-US",
                    "text": "What else can I do for you?",
                    "inputHint": "expectingInput",
                    "replyToId": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000006"
                }]
            ]
        },
        "watermark": {
            "type": "string",
            "default": "",
            "title": "The watermark Schema",
            "examples": [
                "8"
            ]
        }
    },
    "examples": [{
        "activities": [{
            "type": "message",
            "id": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000007",
            "timestamp": "2022-06-29T11:05:05.6678677Z",
            "channelId": "webchat",
            "from": {
                "id": "HPD-MEMBERBOT-DEV",
                "name": "HPD-MEMBERBOT-DEV"
            },
            "conversation": {
                "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
            },
            "locale": "en-US",
            "text": "Your total amount due is $224.73. You can view your current balance, make a payment, or set up autopay by visiting the billing portal.\n                        __[Premium Payments](#/main/content/view-pay-premium-bills)__",
            "inputHint": "acceptingInput",
            "replyToId": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000006"
        },
        {
            "type": "message",
            "id": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000008",
            "timestamp": "2022-06-29T11:05:05.7572014Z",
            "channelId": "webchat",
            "from": {
                "id": "HPD-MEMBERBOT-DEV",
                "name": "HPD-MEMBERBOT-DEV"
            },
            "conversation": {
                "id": "4rgbUEdpCtb4QDFiP8B7Yd-us"
            },
            "locale": "en-US",
            "text": "What else can I do for you?",
            "inputHint": "expectingInput",
            "replyToId": "4rgbUEdpCtb4QDFiP8B7Yd-us|0000006"
        }],
        "watermark": "8"
    }]
}

export const premiumBillingAnswerWithPrompts = {
    "$id": "premiumBillingAnswerWithPrompts",
    "type": "object",
    "required": [
        "activities",
        "watermark"
    ],
    "properties": {
        "activities": {
            "type": "array",
            "items": {
                "type": "object",
                "required": [
                    "type",
                    "id",
                    "timestamp",
                    "channelId",
                    "from",
                    "conversation",
                    "locale",
                    "inputHint",
                    "replyToId",
                ],
                "properties": {
                    "type": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    },
                    "timestamp": {
                        "type": "string"
                    },
                    "channelId": {
                        "type": "string"
                    },
                    "from": {
                        "type": "object",
                        "required": [
                            "id",
                            "name"
                        ],
                        "properties": {
                            "id": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            }
                        }
                    },
                    "conversation": {
                        "type": "object",
                        "required": [
                            "id"
                        ],
                        "properties": {
                            "id": {
                                "type": "string"
                            }
                        }
                    },
                    "locale": {
                        "type": "string"
                    },
                    "text": {
                        "type": "string"
                    },
                    "inputHint": {
                        "type": "string"
                    },
                    "replyToId": {
                        "type": "string"
                    },
                    "suggestedActions": {
                        "type": "object",
                        "required": [
                            "actions"
                        ],
                        "properties": {
                            "actions": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "required": [
                                        "type",
                                        "title",
                                        "value"
                                    ],
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        },
                                        "title": {
                                            "type": "string"
                                        },
                                        "value": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "watermark": {
            "type": "string"
        }
    }
}