module.exports = function doQuery(query, callback)
{ 
    try
    {
        var result = connection.query(query, function(err, rows, fields){
            if(err){
                return {rows: rows, err: err, fields: fields};
            }
            else if (callback) {
                callback(rows);
            }
            return {rows: rows, err: err, fields: fields};
        });

        return result;
    }
    catch (e)
    {
        console.log(e, "---", query);
        return {rows: [], err: e, fields: undefined};
    }
}