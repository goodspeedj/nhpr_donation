import csv, json

csvreader = csv.reader(open('../data/test.csv', 'rb'))

#data = []
lastZip = ""
currentZip = ""

for row in csvreader:
    r = []

    for field in row:
        r.append(field)

    #data.append(r)

    if (r[1] != lastZip):
        jsonStruct = { "zip": r[1], "data": [ { "year": r[4], "amount": r[2], "contrib": r[3], "signals": [ r[5] ] }, ] }   
    else:
        jsonStruct = { "year": r[4], "amount": r[2], "contrib": r[3], "signals": [ r[5] ] }

    lastZip = r[1]

#open('../data/blah.json', 'wb').write(json.dumps(jsonStruct, sort_keys=False)
    print json.dumps(jsonStruct, sort_keys=True, indent=4, separators=(',', ': '))


