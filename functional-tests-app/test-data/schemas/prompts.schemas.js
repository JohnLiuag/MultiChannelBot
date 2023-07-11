export const greetingMessage = {
    "$id": "greetingMessage",
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

export const subprompts = {
    "$id": "subprompts",
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

export const coinsuranceAnswer = {
    "$id": "prompt-coinsurance",
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

export const deductibleOopAnswer = {
    "$id": "prompt-deductible-oopLevelAnswer",
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

export const eligibilityAnswer = {
    "$id": "prompt-eligibility",
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

export const idCardAnswerWithPrompt = {
    "$id": "prompt-idCardAnswerWithPrompts",
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

export const idCardAnswerWithoutPrompt = {
    "$id": "prompt-idCardAnswerWithoutPrompts",
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
                    "attachments": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "required": [
                                "contentType",
                                "content"
                            ],
                            "properties": {
                                "contentType": {
                                    "type": "string"
                                },
                                "content": {
                                    "type": "object",
                                    "required": [
                                        "type",
                                        "body",
                                        "$schema",
                                        "version"
                                    ],
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        },
                                        "body": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "required": [
                                                    "type",
                                                    "url",
                                                    "height",
                                                    "width"
                                                ],
                                                "properties": {
                                                    "type": {
                                                        "type": "string"
                                                    },
                                                    "url": {
                                                        "type": "string"
                                                    },
                                                    "height": {
                                                        "type": "string"
                                                    },
                                                    "width": {
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        },
                                        "$schema": {
                                            "type": "string"
                                        },
                                        "version": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "replyToId": {
                        "type": "string"
                    },
                    "text": {
                        "type": "string"
                    },
                    "inputHint": {
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

export const spendingAccountsAnswer = {
    "$id": "prompt-fsaHsaAnswer",
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

export const liveChatHealthCoaching = {
    "$id": "prompt-liveChatHealthCoaching",
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
                    "suggestedActions",
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

export const liveChatPregnancySupport = {
    "$id": "prompt-liveChatPregnancySupport",
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
                    "suggestedActions",
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

export const liveChatIsNotAvailable = {
    "$id": "prompt-liveChatIsNotAvailable",
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

export const callUsSendMessage = {
    "$id": "prompt-callUsSendMessage",
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
                    "replyToId": {
                        "type": "string"
                    },
                    "value": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "text": {
                        "type": "string"
                    },
                    "inputHint": {
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

export const cancelAnswer = {
    "$id": "prompt-liveChatCancelAnswer",
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

export const liveChatTransition = {
    "$id": "prompt-liveChatTransition",
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
                    "replyToId",
                    "value",
                    "name"
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
                    "replyToId": {
                        "type": "string"
                    },
                    "value": {
                        "type": [
                            "string",
                            "array",
                            "object"
                        ],
                        "required": [
                            "selectedSubject",
                            "selectedSubTopic",
                            "questionsBeforeTransition",
                            "chatBotRefId"
                        ],
                        "properties": {
                            "selectedSubject": {
                                "type": "string"
                            },
                            "selectedSubTopic": {
                                "type": "string"
                            },
                            "questionsBeforeTransition": {
                                "type": "array",
                                "items": {
                                    "anyOf": [{
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }]
                                }
                            },
                            "setselectedchatoptionDebug": {
                                "type": "object",
                                "required": [
                                    "isSuccess"
                                ],
                                "properties": {
                                    "isSuccess": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "chatBotRefId": {
                                "type": "string"
                            }
                        },
                        "items": {
                            "type": "string"
                        }
                    },
                    "name": {
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

export const notNowAnswer = {
    "$id": "notNowAnswer",
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