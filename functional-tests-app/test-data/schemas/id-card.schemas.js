/*
upmc hp - upmc health plan
d - dental
v - vision
aa - assist america
dd - dental discount
*/

export const buttons = {
    "$id": "buttons",
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

export const clickIdCardWithPrompt = {
    "$id": "clickIdCardWithPrompt",
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
                                        "$schema",
                                        "version",
                                        "body"
                                    ],
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        },
                                        "$schema": {
                                            "type": "string"
                                        },
                                        "version": {
                                            "type": "string"
                                        },
                                        "body": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "required": [
                                                    "type",
                                                    "url"
                                                ],
                                                "properties": {
                                                    "type": {
                                                        "type": "string"
                                                    },
                                                    "url": {
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
                    "replyToId": {
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
                    }
                }
            }
        },
        "watermark": {
            "type": "string"
        }
    }
}

export const requestIdCardWithPrompt = {
    "$id": "requestIdCardWithPromptOnIdCard",
    "title": "request id card with prompt",
    "type": "object",
    "required": [
        "activities",
        "watermark"
    ],
    "properties": {
        "activities": {
            "title": "The activities Schema",
            "type": "array",
            "items": {
                "title": "A Schema",
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
                        "title": "The type Schema",
                        "type": "string"
                    },
                    "id": {
                        "title": "The id Schema",
                        "type": "string"
                    },
                    "timestamp": {
                        "title": "The timestamp Schema",
                        "type": "string"
                    },
                    "channelId": {
                        "title": "The channelId Schema",
                        "type": "string"
                    },
                    "from": {
                        "title": "The from Schema",
                        "type": "object",
                        "required": [
                            "id",
                            "name"
                        ],
                        "properties": {
                            "id": {
                                "title": "The id Schema",
                                "type": "string"
                            },
                            "name": {
                                "title": "The name Schema",
                                "type": "string"
                            }
                        }
                    },
                    "conversation": {
                        "title": "The conversation Schema",
                        "type": "object",
                        "required": [
                            "id"
                        ],
                        "properties": {
                            "id": {
                                "title": "The id Schema",
                                "type": "string"
                            }
                        }
                    },
                    "locale": {
                        "title": "The locale Schema",
                        "type": "string"
                    },
                    "text": {
                        "title": "The text Schema",
                        "type": "string"
                    },
                    "inputHint": {
                        "title": "The inputHint Schema",
                        "type": "string"
                    },
                    "replyToId": {
                        "title": "The replyToId Schema",
                        "type": "string"
                    },
                    "attachments": {
                        "title": "The attachments Schema",
                        "type": "array",
                        "items": {
                            "title": "A Schema",
                            "type": "object",
                            "required": [
                                "contentType",
                                "content"
                            ],
                            "properties": {
                                "contentType": {
                                    "title": "The contentType Schema",
                                    "type": "string"
                                },
                                "content": {
                                    "title": "The content Schema",
                                    "type": "object",
                                    "required": [
                                        "type",
                                        "$schema",
                                        "version",
                                        "body"
                                    ],
                                    "properties": {
                                        "type": {
                                            "title": "The type Schema",
                                            "type": "string"
                                        },
                                        "$schema": {
                                            "title": "The $schema Schema",
                                            "type": "string"
                                        },
                                        "version": {
                                            "title": "The version Schema",
                                            "type": "string"
                                        },
                                        "body": {
                                            "title": "The body Schema",
                                            "type": "array",
                                            "items": {
                                                "title": "A Schema",
                                                "type": "object",
                                                "required": [
                                                    "type",
                                                    "url"
                                                ],
                                                "properties": {
                                                    "type": {
                                                        "title": "The type Schema",
                                                        "type": "string"
                                                    },
                                                    "url": {
                                                        "title": "The url Schema",
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
                    "suggestedActions": {
                        "title": "The suggestedActions Schema",
                        "type": "object",
                        "required": [
                            "actions"
                        ],
                        "properties": {
                            "actions": {
                                "title": "The actions Schema",
                                "type": "array",
                                "items": {
                                    "title": "A Schema",
                                    "type": "object",
                                    "required": [
                                        "type",
                                        "title",
                                        "value"
                                    ],
                                    "properties": {
                                        "type": {
                                            "title": "The type Schema",
                                            "type": "string"
                                        },
                                        "title": {
                                            "title": "The title Schema",
                                            "type": "string"
                                        },
                                        "value": {
                                            "title": "The value Schema",
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
            "title": "The watermark Schema",
            "type": "string"
        }
    }
}

export const clickDdIdCardWithPrompt = {
    "$id": "clickDentalDiscountIdCardWithPrompt",
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
                    "replyToId": {
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
                    }
                }
            }
        },
        "watermark": {
            "type": "string"
        }
    }
}

export const requestDdIdCardWithPrompt = {
    "$id": "requestDentalDiscountIdCardWithPrompt",
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
                    "text": {
                        "type": "string"
                    },
                    "inputHint": {
                        "type": "string"
                    },
                    "replyToId": {
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

export const ddIdCardInsteadOfDIdCard = {
    "$id": "ddIdCardInsteadOfDIdCard",
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
                    "text": {
                        "type": "string"
                    },
                    "inputHint": {
                        "type": "string"
                    },
                    "replyToId": {
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

export const clickIdCardWithoutPrompt = {
    "$id": "clickIdCardWithoutPrompt",
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

export const requestIdCardWithoutPrompt = {
    "$id": "requestIdCardWithoutPrompt",
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
                    "text": {
                        "type": "string"
                    },
                    "inputHint": {
                        "type": "string"
                    },
                    "replyToId": {
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
                    }
                }
            }
        },
        "watermark": {
            "type": "string"
        }
    }
}

export const clickNoAction = {
    "$id": "clickNoAction",
    "title": "click NO action",
    "type": "object",
    "required": [
        "activities",
        "watermark"
    ],
    "properties": {
        "activities": {
            "title": "The activities Schema",
            "type": "array",
            "items": {
                "title": "A Schema",
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
                        "title": "The type Schema",
                        "type": "string"
                    },
                    "id": {
                        "title": "The id Schema",
                        "type": "string"
                    },
                    "timestamp": {
                        "title": "The timestamp Schema",
                        "type": "string"
                    },
                    "channelId": {
                        "title": "The channelId Schema",
                        "type": "string"
                    },
                    "from": {
                        "title": "The from Schema",
                        "type": "object",
                        "required": [
                            "id",
                            "name"
                        ],
                        "properties": {
                            "id": {
                                "title": "The id Schema",
                                "type": "string"
                            },
                            "name": {
                                "title": "The name Schema",
                                "type": "string"
                            }
                        }
                    },
                    "conversation": {
                        "title": "The conversation Schema",
                        "type": "object",
                        "required": [
                            "id"
                        ],
                        "properties": {
                            "id": {
                                "title": "The id Schema",
                                "type": "string"
                            }
                        }
                    },
                    "locale": {
                        "title": "The locale Schema",
                        "type": "string"
                    },
                    "text": {
                        "title": "The text Schema",
                        "type": "string"
                    },
                    "inputHint": {
                        "title": "The inputHint Schema",
                        "type": "string"
                    },
                    "replyToId": {
                        "title": "The replyToId Schema",
                        "type": "string"
                    }
                }
            }
        },
        "watermark": {
            "title": "The watermark Schema",
            "type": "string"
        }
    }
}

export const noAvailableIdCardWithPrompt = {
    "$id": "noAvailableIdCardWithPrompt",
    "title": "no available id card",
    "type": "object",
    "required": [
        "activities",
        "watermark"
    ],
    "properties": {
        "activities": {
            "title": "The activities Schema",
            "type": "array",
            "items": {
                "title": "A Schema",
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
                    "replyToId",
                ],
                "properties": {
                    "type": {
                        "title": "The type Schema",
                        "type": "string"
                    },
                    "id": {
                        "title": "The id Schema",
                        "type": "string"
                    },
                    "timestamp": {
                        "title": "The timestamp Schema",
                        "type": "string"
                    },
                    "channelId": {
                        "title": "The channelId Schema",
                        "type": "string"
                    },
                    "from": {
                        "title": "The from Schema",
                        "type": "object",
                        "required": [
                            "id",
                            "name"
                        ],
                        "properties": {
                            "id": {
                                "title": "The id Schema",
                                "type": "string"
                            },
                            "name": {
                                "title": "The name Schema",
                                "type": "string"
                            }
                        }
                    },
                    "conversation": {
                        "title": "The conversation Schema",
                        "type": "object",
                        "required": [
                            "id"
                        ],
                        "properties": {
                            "id": {
                                "title": "The id Schema",
                                "type": "string"
                            }
                        }
                    },
                    "locale": {
                        "title": "The locale Schema",
                        "type": "string"
                    },
                    "text": {
                        "title": "The text Schema",
                        "type": "string"
                    },
                    "inputHint": {
                        "title": "The inputHint Schema",
                        "type": "string"
                    },
                    "replyToId": {
                        "title": "The replyToId Schema",
                        "type": "string"
                    },
                    "suggestedActions": {
                        "title": "The suggestedActions Schema",
                        "type": "object",
                        "required": [
                            "actions"
                        ],
                        "properties": {
                            "actions": {
                                "title": "The actions Schema",
                                "type": "array",
                                "items": {
                                    "title": "A Schema",
                                    "type": "object",
                                    "required": [
                                        "type",
                                        "title",
                                        "value"
                                    ],
                                    "properties": {
                                        "type": {
                                            "title": "The type Schema",
                                            "type": "string"
                                        },
                                        "title": {
                                            "title": "The title Schema",
                                            "type": "string"
                                        },
                                        "value": {
                                            "title": "The value Schema",
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
            "title": "The watermark Schema",
            "type": "string"
        }
    }
}

export const noAvailableIdCardWithoutPrompt = {
    "$id": "noAvailableIdCardWithoutPrompt",
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

export const futureAnswer = {
    "$id": "futureAnswer",
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

export const termedAnswer = {
    "$id": "termedAnswer",
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

export const noAvailableIdCard = {
    "$id": "noAvailableIdCard",
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

export const promptToSeeAnotherIdCard = {
    "$id": "promptToSeeAnotherIdCard",
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

export const clickNoLiveChatButton = {
    "$id": "clickNoLiveChatButtonOnIdCars",
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

export const eligibilityAnswer = {
    "$id": "id-card-eligibility",
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

export const coinsuranceAnswer = {
    "$id": "id-card-oinsurance",
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

export const benefitsAnswer = {
    "$id": "benefitsAnswer",
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

export const premiumBilling = {
    "$id": "id-card-premiumBilling",
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

export const faq = {
    "$id": "id-card-faq",
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