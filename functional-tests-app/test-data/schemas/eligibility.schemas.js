export const eligibilityAnswer = {
    "$id": "eligibility",
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
                    "text",
                    "inputHint",
                    "replyToId"
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
                    }
                }
            }
        },
        "watermark": {
            "type": "string"
        }
    }
}

export const liveChatOfferAnswer = {
    "$id": "liveChatOfferAnswerEligibility",
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
                    "replyToId"
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

export const clickNoLiveChatButton = {
    "$id": "clickNoLiveChatButtonOnEligibility",
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
                    "text",
                    "inputHint",
                    "replyToId"
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
                    }
                }
            }
        },
        "watermark": {
            "type": "string"
        }
    }
}

export const visionDiscountAnswer = {
    "$id": "visionDiscountAnswer",
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
                    "replyToId",
                    "locale",
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
                    "replyToId": {
                        "type": "string"
                    },
                    "value": {
                        "type": "object",
                        "required": [
                            "description",
                            "options"
                        ],
                        "properties": {
                            "description": {
                                "type": "string"
                            },
                            "options": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "required": [
                                        "key",
                                        "value"
                                    ],
                                    "properties": {
                                        "key": {
                                            "type": "string"
                                        },
                                        "value": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "name": {
                        "type": "string"
                    },
                    "text": {
                        "type": "string"
                    },
                    "inputHint": {
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
                    },
                    "localTimestamp": {
                        "type": "string"
                    },
                    "localTimezone": {
                        "type": "string"
                    },
                    "serviceUrl": {
                        "type": "string"
                    },
                    "textFormat": {
                        "type": "string"
                    },
                    "locale": {
                        "type": "string"
                    },
                    "attachments": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "required": [
                                "contentType",
                                "contentUrl",
                                "name"
                            ],
                            "properties": {
                                "contentType": {
                                    "type": "string"
                                },
                                "contentUrl": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "entities": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "required": [
                                "type",
                                "requiresBotState",
                                "supportsListening",
                                "supportsTts"
                            ],
                            "properties": {
                                "type": {
                                    "type": "string"
                                },
                                "requiresBotState": {
                                    "type": "boolean"
                                },
                                "supportsListening": {
                                    "type": "boolean"
                                },
                                "supportsTts": {
                                    "type": "boolean"
                                }
                            }
                        }
                    },
                    "channelData": {
                        "type": "object",
                        "required": [
                            "clientActivityID"
                        ],
                        "properties": {
                            "clientActivityID": {
                                "type": "string"
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