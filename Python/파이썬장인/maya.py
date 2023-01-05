import os, glob, shutil
import numpy as np
import pandas as pd


# import maya.cmds as cmds


def text_file_to_list(path):
    items_list = []
    temp_dict = {}

    # Load Data
    opened_file = open(path, 'r', encoding='UTF-8')
    file_lines = opened_file.readlines()

    for line in file_lines:
        if ' name="" description=""' in line:
            contents = line.lstrip()
            temp_dict['space'] = line.find('<')
            temp_dict['value'] = contents[1:contents.find(' name="" description=""')]
            items_list.append(temp_dict.copy())

        else:
            pass
    return items_list


print(text_file_to_list('D:/jinwoo/RD/Body_system_.txt'))


def list_into_hierarchy(list):
    left_node = 0
    right_node = 0

    for i in range(len(list)):
        cmds.group(em=True, n=list[i]['value'])

    for i in range(len(list)):
        left_node = list[i]['space']
        for j in range(1, len(list)):

            right_node = list[j]['space']

            print(left_node, right_node)

            if right_node > list[j + 1]['space']:
                left_node = list[j + 1]['space']

            if left_node < right_node:
                parent = list[i]['value']
                child = list[j]['value']
                print(parent, child)
                cmds.parent(list[j]['value'], list[i]['value'], add=True)


list_for_hierarchy = text_file_to_list('D:/jinwoo/RD/Body_system_.txt')
list_into_hierarchy(list_for_hierarchy)

'''        
print(len(number))
print(len(text))
for idx in range(len(text)):
    print(number[idx], text[idx])
'''
