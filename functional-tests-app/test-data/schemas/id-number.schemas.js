export const idNumberAnswer = {
    "$id": "idNumberAnswer",
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

export const wellnessNonMedicalAnswer = {
    "$id": "wellnessNonMedicalAnswer",
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

export const clickNoActionButton = {
    "$id": "clickNoActionButton",
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

export const requestIdCardWithPrompt = {
    "$id": "requestIdCardWithPromptOnIdNumbers",
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

export const noDentalVisionCoverageAnswer = {
    "$id": "noDentalVisionCoverageAnswer",
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

export const termedFutureAnswer = {
    "$id": "termedFutureAnswer",
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